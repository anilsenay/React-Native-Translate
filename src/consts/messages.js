import {showMessage} from "react-native-flash-message";

const emptyString = () => {
    showMessage({
        message: "Please enter your email and password",
        type: "warning",
      });
}

const wrongPassword = () => {
    showMessage({
        message: "Wrong Password!",
        type: "danger",
      });
}

const invalidEmail = () => {
    showMessage({
        message: "Invalid Email!",
        type: "danger",
      });
}

const userNotFound = () => {
    showMessage({
        message: "User Not Found!",
        type: "danger",
      });
}

const otherErrors = () => {
    showMessage({
        message: "Please check your email and password",
        type: "danger",
      });
}

const emailInUse = () => {
    showMessage({
        message: "There already exists an account with the given email address!",
        type: "danger",
      });
}

const weakPassword = () => {
    showMessage({
        message: "The password is not strong enough!",
        type: "danger",
      });
}

const passwordNotMatch = () => {
    showMessage({
        message: "Passwords do not match!",
        type: "danger",
      });
}

const accountCreated = () => {
    showMessage({
        message: "Your account created and logged in!",
        type: "success",
      });
}

const loggedIn = () => {
    showMessage({
        message: "Succesfully logged in!",
        type: "success",
      });
}

const logout = () => {
    showMessage({
        message: "You have logged out",
        type: "info",
      });
}

const favorited = () => {
    showMessage({
        message: "Added to favorites",
        type: "success",
      });
}

const removeFavorite = () => {
    showMessage({
        message: "Remove from favorites",
        type: "danger",
      });
}

export {
    emptyString,
    wrongPassword,
    invalidEmail,
    userNotFound,
    otherErrors,
    accountCreated,
    emailInUse,
    weakPassword,
    passwordNotMatch,
    loggedIn,
    logout,
    favorited,
    removeFavorite,
}