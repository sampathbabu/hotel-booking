export const BASE_URL = "https://hotel-booking-api-they.onrender.com";

const version = "v1";
const specification = "api";


const authModule = "auth";
const paymentModule = "payment";

const finalBaseURL = `${BASE_URL}/${specification}/${version}`;
const authBaseURL = `${finalBaseURL}/${authModule}`;
const paymentBaseURL = `${finalBaseURL}/${paymentModule}`;

//Authentication (User) related URL's....
export const LOGIN_URL = `${authBaseURL}/login`;
export const REGISTER_URL = `${authBaseURL}/register`;

//Booking status URL
export const BOOKING_URL = `${BASE_URL}/api/v1/booking`;

//Payment related URL's
export const VERIFY_ORDER_URL = `${paymentBaseURL}/order/verify`;
export const CREATE_ORDER_URL = `${paymentBaseURL}/order/create`;
