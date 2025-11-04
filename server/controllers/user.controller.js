import AppError from "../utils/error.util";

const register = (req, res, next) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return new AppError['All  filead are required']
  }
};

const login = (req, res) => {
    
};

const logout = (req, res) =>{
    
};

const getProfile = (req, res) => {
    
}

  export  {
    register,
        login,
        logout,
        getProfile
}