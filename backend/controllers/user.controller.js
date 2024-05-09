import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
    try {
        const logedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: logedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error in getUsersForSidebar ", error);
        return res.status(500).json({ message: error.message });
    }
};