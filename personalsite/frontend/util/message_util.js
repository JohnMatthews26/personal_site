export const createMessage = (message) => {
  console.log(message);
  return $.ajax({
    method: 'POST',
    url: 'api/messages/',
    data: {message}
  });
};
