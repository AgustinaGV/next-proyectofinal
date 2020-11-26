export const mapUserData = (user) => {
    const { uid, email, name, favoritos, xa, ya } = user;
    
    return {
      id: uid,
      email,
      name,
      favoritos,
      token: xa || ya,
    };
    
  };