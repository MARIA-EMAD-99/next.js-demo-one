import { comments } from "../../../Data/comments";
import { v4 as uuid } from 'uuid';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments);
    } else if (req.method === 'POST') {
        const { text: commentText } = req.body; // Assuming the comment text is sent in the request body

        if (!commentText) {
            return res.status(400).json({ error: 'Comment text is required' });
        }

        const newComment = {
            id: uuid(),
            text: commentText
        };

        comments.push(newComment);
        res.status(200).json(comments);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
