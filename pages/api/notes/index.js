import nextConnect from 'next-connect';
import { getNotes } from '@/helpers/controllers/noteController';
import onError from '@/helpers/middleware/errors/errors';

/*  
  route /api/notes
*/
const handler = nextConnect({ onError });

handler.get(getNotes);

export default handler;

//import { isAuthenticatedUser } from '@/api-helpers/middleware/authMiddleware';
//handler.use(isAuthenticatedUser).get(getNotes);
