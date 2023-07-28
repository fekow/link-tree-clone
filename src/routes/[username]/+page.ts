import { db, userData } from '$lib/firebase';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    const { username } = params;
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection,where('username','==',username),limit(1));
    const snapshot = await getDocs(q);
    const exists = snapshot.docs[0]?.exists();
    const data = snapshot.docs[0]?.data();

    if (!exists) {
        throw error(404, 'User not found');
    }

    if(!data.published) {
        throw error(403, `the prodile of @${data.username} is not published yet`);
    }

    return {
        username: data.username,
        photoURL: data.photoURL,
        bio: data.bio,
        links: data.links ?? [],
    };
    
}) satisfies PageLoad;