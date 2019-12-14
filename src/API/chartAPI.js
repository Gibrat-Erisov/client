import instance from "./instance";

export const chartAPI = {
  getCompany(companyID) {
    return instance.get(`company/${companyID}`).then(response => response);
  },

  getFolder(folderId) {
    return instance.get(`folder/${folderId}`).then(response => response.data);
  },

  getIndicator(companyID) {
    return instance
      .get(`indicator/${companyID}`)
      .then(response => response.data);
  }
};
