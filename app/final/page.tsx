export default function Page() {
return (
    <>
    <h1 className="text-3xl ml-5">Final Exam</h1>
    <form>
      <label htmlFor="product" className="ml-5">Product Description</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400"/>
      <br />
      <label htmlFor="Food" className="mx-5">Choose a food:</label>
      <select name="foods" id="foods">
      <option value="dumplings">Dumplings</option>
      <option value="chicken lo mein">Chicken lo mein</option>
      <option value="sushi">Sushi</option>
      <option value="fried rice">Fried Rice</option>
      </select>

      <br />

      <div className="ml-5 mt-5">
      <input type="radio" id="Home" name="fav_language" value="Home" />
      <label htmlFor="Home">Home</label><br />
      <input type="radio" id="About" name="fav_language" value="About" />
      <label htmlFor="About">About</label><br />
      <input type="radio" id="Menu" name="fav_language" value="Menu" />
      <label htmlFor="Menu">Menu</label>
      </div>

      <div className="ml-5 mt-5">
      <input type="checkbox" id="food1" name="food1" value="Fried rice" />
      <label htmlFor="food1"> I have fried rice</label><br />
      <input type="checkbox" id="food2" name="food2" value="Beef" />
      <label htmlFor="food2"> I have beef</label><br />
      </div>





<button className="ml-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Save</button>
      </form>
      </>
    );
  }
  