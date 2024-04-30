import React, { useState } from 'react';

function Index() {
    const [comments, setComments] = useState([]);
    const [comm, setComm] = useState("");
    const [updatedText, setUpdatedText] = useState("");
    const [editId, setEditId] = useState(null);

    const handleClick = async () => {
        try {
            const res = await fetch('/api/comments');
            const data = await res.json();
            setComments(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    const postComment = async () => {
        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                body: JSON.stringify({ text: comm }),
                headers: { 'Content-Type': "application/json" }
            });
            const data = await res.json();
            setComments(data);
            setComm(""); 
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    const handleDelete=async(commentId)=>{
            const res= await fetch(`/api/comments/${commentId}`,{method:"DELETE"})
            const data=await res.json()
            handleClick()
    }

    const handleEdit = async (commentId, newText) => {
        try {
            const res = await fetch(`/api/comments/${commentId}`, {
                method: "PUT",
                body: JSON.stringify({ text: newText }),
                headers: { 'Content-Type': "application/json" }
            });
            const data = await res.json();
            handleClick(); 
            setEditId(null); 
            setUpdatedText(""); 
        } catch (error) {
            console.error('Error updating comment:', error);
        }
    }

    const handleChange = (e) => {
        setComm(e.target.value);
    }

    const handleEditChange = (e) => {
        setUpdatedText(e.target.value);
    }

    const handleEditClick = (commentId, text) => {
        setEditId(commentId);
        setUpdatedText(text);
    }

    return (
        <>
            {comments.map((com) => (
                <div key={com.id}>
                    {editId === com.id ? (
                        <>
                            <input type='text' value={updatedText} onChange={handleEditChange} />
                            <button className='btn btn-info m-1' onClick={() => handleEdit(com.id, updatedText)}>Save</button>
                            <button className='btn btn-primary m-1' onClick={() => setEditId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            {com.id} {com.text}
                            <button className='btn btn-danger m-1' onClick={() => handleDelete(com.id)}>Delete</button>
                            <button className='btn btn-dark m-1' onClick={() => handleEditClick(com.id, com.text)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
            <button className='btn btn-primary' onClick={handleClick}>Get all comments</button>
            <hr />
            <form>
                <input type='text' value={comm} onChange={handleChange} />
                <button className='btn btn-waring' onClick={postComment}>Add Comment</button>
            </form>
        </>
    );
}

export default Index;

