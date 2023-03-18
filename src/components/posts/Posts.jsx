import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Saiful Islam",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      img: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "John Yusef",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
	    img: "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	  }
	]

 return (
      <div className="posts">
        {posts.map(post=>( <Post post={post} key={post.id}/>))}
      </div>
 )
};

export default Posts;
