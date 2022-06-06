// Create the function that will get the accesstoken and wrapp into a header for making request of secured data
export default function authHeader() {
    // Store the data from the item user included in the local storage
    const user = JSON.parse(localStorage.getItem("user"));
    // Check if the variable user it is not null and if there is a field for the accessToken
    if (user && user.accessToken) {
        // If this is foun, then set the header object x-access-token = to the token retreived
        return { "x-access-token": user.accessToken };
    } else {
        // If not found then return and empty object
        return {};
    }
}
