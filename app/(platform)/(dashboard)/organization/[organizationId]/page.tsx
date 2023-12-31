const OraganizationIdPage = () =>{
  async function create(formData: FormData) {
    "use server";
    
    const title = formData.get("title") as string;
    await db.board.create({
        data:{
            title
        }
    });
  }


    return(
    <div>
        <form>
            <input
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            className="border-black border p-1">
            
            </input>
        </form>
    </div>
);
};
export default OraganizationIdPage;