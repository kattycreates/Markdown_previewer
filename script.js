

marked.setOptions({breaks: true});
function setDefault()
{
    let editor=document.getElementById('editor');
    let preview=document.getElementById('preview');
    let defaultText=` # This is a H1 header
## This is a H2 header
[This is a link](https://github.com/kattycreates)

\`This is an inline code\`
\`\`\` This is a code block
function(a,b)
{
    return a+b;
}
\`\`\`
- This is a list item 1
- This is a list item 2
- This is a list item 3
> This is a blockquote

![This is an image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnvUp5EKbegLgbFZ2KK-D1m9EHaMfQcHfYg&usqp=CAU)

**This is a bolded text** `;
    editor.innerHTML=defaultText;
    preview.innerHTML=marked(defaultText);


}
function updatePreview()
{
    let editor=document.getElementById('editor');
    let preview=document.getElementById('preview');
    let markedValue=marked(editor.value);
    preview.innerHTML=markedValue;
}