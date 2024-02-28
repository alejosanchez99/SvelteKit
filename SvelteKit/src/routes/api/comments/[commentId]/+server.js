import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments.js";

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const comment = findComment(commentId);

    return json(comment);
}

export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();

    const comment = findComment(commentId);
    comment.text = text;

    return json(comment);
}

export async function DELETE(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const deletedComment = findComment(commentId);
    removeComent(commentId);

    return json(deletedComment);
}

function removeComent(commentId) {
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId))

    comments.splice(index, 1);
}

function findComment(commentId) {
    return comments.find((comment) => comment.id === parseInt(commentId));
}