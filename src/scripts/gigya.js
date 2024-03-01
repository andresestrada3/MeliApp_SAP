
export function setupGigyaEventHandlers(login) {
    gigya.accounts.addEventHandlers({
      onLogin: function (response) {
        login(response);
      },
      onLogout: function (response) {
      },
    });
}