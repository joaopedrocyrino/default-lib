import jwt from 'jsonwebtoken'

class Jwt {
  decode (token: string): { permissions: string[], id: string } {   
    const decoded = jwt.decode(token)

    return decoded as { id: string, permissions: string[] }
  }
}

export default new Jwt()
