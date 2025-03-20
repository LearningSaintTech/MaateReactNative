import { LOGIN_URL, SIGNUP_URL, PROFILE_URL, BASE_URL } from "../constants/apiurl";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Retrieve authentication token from AsyncStorage
async function getAuthToken() {
    try {
        const token = await AsyncStorage.getItem("accessToken");
        if (!token) throw new Error("Authentication token is missing.");
        return token;
    } catch (error) {
        console.error("Error retrieving token from AsyncStorage:", error.message);
        throw error;
    }
}

// Helper function to make API requests with timeout and retry
async function apiRequest(endpoint, method, body = null, token = null, timeout = 10000, retries = 2) {
    console.log(`[API] ${method} ${endpoint}`);

    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const options = { method, headers, ...(body && { body: JSON.stringify(body) }) };

    for (let attempt = 1; attempt <= retries; attempt++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        options.signal = controller.signal;

        try {
            const response = await fetch(endpoint, options);
            clearTimeout(timeoutId);

            console.log(`[API] Response Status: ${response.status}`);

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response format.");
            }

            const data = await response.json();
            if (!response.ok) {
                const error = new Error(data.reason || "Something went wrong.");
                error.status = response.status;
                if (response.status === 401) console.warn("Unauthorized request - token may be invalid or expired.");
                throw error;
            }

            return data;
        } catch (error) {
            if (error.name === "AbortError") {
                console.error(`[API] Request timed out after ${timeout}ms`);
                throw new Error("Request timed out.");
            }
            if (attempt === retries) {
                console.error(`[API] Network/API Request Failed: ${error.message}`, { status: error.status });
                throw error;
            }
            console.warn(`[API] Retrying request (${attempt}/${retries})...`);
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}

// Sign-up API call
export async function signUp(mobileNumber, otp, name) {
    if (!mobileNumber || !otp || !name) throw new Error("Mobile number, OTP, and name are required.");
    if (!/^\d{10}$/.test(mobileNumber)) throw new Error("Invalid mobile number format.");

    return apiRequest(SIGNUP_URL, "POST", { mobileNumber, otp, name });
}

// Login API call
export async function login(mobileNumber, otp) {
    if (!mobileNumber || !otp) throw new Error("Mobile number and OTP are required.");
    if (!/^\d{10}$/.test(mobileNumber)) throw new Error("Invalid mobile number format.");

    return apiRequest(LOGIN_URL, "POST", { mobileNumber, otp });
}

// Fetch authenticated customer profile
export async function getCustomerProfile() {
    const token = await getAuthToken();
    return apiRequest(PROFILE_URL, "GET", null, token);
}

// Fetch all restaurants
export async function getAllRestaurants() {
    const token = await getAuthToken();
    return apiRequest(`${BASE_URL}/api/dashboard/allRestaurants`, "GET", null, token);
}
