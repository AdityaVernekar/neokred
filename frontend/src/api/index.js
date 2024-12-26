

export const convertMarkdown = async (markdownText) => {
    try {
      const response = await fetch('http://localhost:3000/convert-markdown', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ markdown: markdownText }),
      });
  
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error making API call:', error.message);
      return null;
    }
  };
  