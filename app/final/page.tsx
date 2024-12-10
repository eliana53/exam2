export default function Page() {
return (
    <>
    <h1 className="ml-5 text-3xl" >Final Exam</h1>
<form>
    <label htmlFor= "product" className="ml-5">Product Description</label>
    <input type="text" name="product" id="product" className="m-5 text-black bg-yellow-400" />
    <br />

    <label htmlFor="food" className="mx-5">Choose a food: </label>

<select name="food" id="food">
    <option value = "dumplings"> Dumplings</option>
    <option value = "chicken lo mein"> Chicken lo mein </option>
    <option value = "sushi"> sushi</option>
    <option value = "fried rice"> fried rice </option>
</select>

<br /> 

<div className="auto">
<input type="sauces" id="html" name= "fav_food" value = "HTML" />
<label htmlFor="html"> HTML</label> <br /> 
<input type = "sauces" id="css" name= "fav_food" value = "CSS" />
<label htmlFor="css">CSS</label><br />
<input type="sauces" id="javascript" name="Fav_food" value= "Javascript" />
<label htmlFor="javascript">JavaScript</label>
</div>

<br /> 

<div className="lol">
<input type="checkbox" id="food1" name="food" value="rice" /> 
<label htmlFor="food1"> I have rice</label> <br />
<input type="checkbox" id="food2" name="food2" value = "beef" />
<label htmlFor="food2"> I have beef</label> <br />
<input type="checkbox" id="food3" name="food3" value = "Turkey" />
<label htmlFor = "food3" > I have turkey</label> <br></br>
</div>
)





<button className="ml-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Save</button>
      </form>
      </>
    );
  }
  