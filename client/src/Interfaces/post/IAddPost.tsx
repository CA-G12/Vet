interface IAddPost {
  UserId?:number|null,
  content: string,
  image?:string,
  TagId:number,
  AnimalId:number
}
export default IAddPost;
