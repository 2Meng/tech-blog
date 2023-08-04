document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
  
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const commentText = document.getElementById('comment-text').value;
      const blogId = blogIdElement.getAttribute('blog-id');
  
      try {
        const response = await fetch(`/api/comments?blog_id=${blogId}`, {
          method: 'POST',
          body: JSON.stringify({ text: commentText, blog_id: blogId }), 
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          document.location.replace('/login');
        } else {
          console.log('submitted', response);
        }
      } catch (err) {
        console.error(err);
      }
    });
  });