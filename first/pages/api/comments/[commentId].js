import { comments } from "../../../Data/comments";

export default function handler(req, res) {
    if (req.method === 'DELETE') {
        // Delete comment
        const { commentId } = req.query;
        const stringCommentId = commentId.toString();
        const index = comments.findIndex((com) => com.id.toString() === stringCommentId);

        if (index === -1) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        comments.splice(index, 1);
        return res.status(200).json({ msg: 'deleted' });
    } else if (req.method === 'PUT') {
     
        const { commentId } = req.query;
        const stringCommentId = commentId.toString();
        const index = comments.findIndex((com) => com.id.toString() === stringCommentId);

        if (index === -1) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        if (req.body && req.body.text) {
            comments[index].text = req.body.text;
        } else {
            return res.status(400).json({ error: 'Comment text is required' });
        }

        return res.status(200).json(comments[index]);
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
