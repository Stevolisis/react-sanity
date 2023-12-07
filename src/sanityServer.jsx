import { createClient } from '@sanity/client';

export default createClient({
    projectId: 'xziq8i10',
    dataset: 'production',
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: true, // `false` if you want to ensure fresh data
});