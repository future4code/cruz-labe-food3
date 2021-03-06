export const goToHomePage = (history) => {
  history.push("/");
};

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToAddAddressPage = (history) => {
  history.push("/addAddress");
};

export const goToMyCartPage = (history) => {
  history.push("/cart");
};

export const goToProfile = (history) => {
  history.push("/profile");
};

export const goToSearch = (history) => {
  history.push("/search");
};

export const goToEditAddressPage = (history) => {
  history.push("/editAddressPage");
};

export const goToEditProfilePage = (history) => {
  history.push("/editProfile");
};

export const goToRestaurant = (history, idRest) => {
  history.push(`/restaurant/${idRest}`);
};

export const goToLastPage = (history) => {
  history.goBack();
};
