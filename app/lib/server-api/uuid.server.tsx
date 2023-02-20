const getUuid = async () => {
  return await fetch("https://uuid.rocks/plain").then(
    async (response) => await response.text()
  );
};

export default getUuid;
