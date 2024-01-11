//creating a component
function Header(){
 var title = "React learning"
 var bgPrimary="bg-primary";
 var isHeader= false;
 var styleObj=
    {backgroundColor:"red", fontSize:50 +"%"
 }
 //condition ? true statement: falsestatement
return(
<div className={isHeader ? "bg-primary" : "bg-secondary"}>            
{/* or we can use "bgPrimary" */}
<h2>header Component</h2>
<h3> {2+2} </h3>

<h3 style={styleObj}>{title}</h3>
</div>)
}

export default Header;
// if we want to use js within the html then we can use { curly braces}  //LEARN ABOUT JS EXPRESSIONS