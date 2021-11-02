### ScssProject

[This website lives here](https://volodymyrsi.github.io/ScssProject/)

##### Make sure you click on the heading to see the style change!

>It is pretty difficult to make good use of css preprocessing on tiny projects, so this one demonstrates how I can use of the key features 
though their usage is not super justified and vanilla css would not be waaaay worse.

The primary purpose for `SCSS` here is to define `variables` which are later used to create 2 designs, sort of a __*light*__ and a __*dark*__ theme.

- There are two files which use same variable names but assign different properties to them (text colors, background colors and images).

- I also used a `@map` element to keep track of all the font sizes and have a quick and accessible use of those.

- `@extend` helps keep the DRY principle thus I avoid writing repetitive code.

- There is a lot of nesting as well, which again helps organize the code, keep it cleaner and shorter.

I was using __VS Code live-scss__ complier while working on the project. However, I compiled CSS with __Koala compiler__ *(config included)* but did not fall in love with it, though it felt okay.
