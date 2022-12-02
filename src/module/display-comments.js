async function displayComments(id) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await response.json();
    const commentsCount = document.getElementById(`comment${id}`);
    commentsCount.textContent = `${data.length || ''}`;
  } catch (err) {
    // do nothing
  }
}

export default displayComments;
