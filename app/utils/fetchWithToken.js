// utils/fetchWithToken.js
import AsyncStorage from "@react-native-async-storage/async-storage";

const BACKEND_URL = "https://connect-backend-rho.vercel.app/api";

export async function fetchWithToken(endpoint, options = {}) {
    try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
            console.error(" No token found in storage");
            return { success: false, message: "No token found" };
        }

        const res = await fetch(`${BACKEND_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                ...options.headers,
            },
        });

        let data;
        try {
            data = await res.json();
        } catch (e) {
            data = { success: false, message: "Invalid JSON response" };
        }

        if (!res.ok) {
            console.warn("API error", res.status, data);
            return { success: false, status: res.status, ...data };
        }
        return data;
    } catch (err) {
        console.error(" fetchWithToken error:", err);
        return { success: false, message: err.message };
    }
}
