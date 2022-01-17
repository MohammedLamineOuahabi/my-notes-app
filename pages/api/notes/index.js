import nextConnect from 'next-connect';
import { getNotes } from '@/api-helpers/controllers/noteController';

/*  
  route /api/notes
*/
const handler = nextConnect();

handler.get(getNotes);

export default handler;

//import { isAuthenticatedUser } from '@/api-helpers/middleware/authMiddleware';
//handler.use(isAuthenticatedUser).get(getNotes);
