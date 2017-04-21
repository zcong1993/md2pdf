ebook-convert {{ input }} {{ output }}  --chapter="descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter ')]" --level1-toc="descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter-1 ')]" --level2-toc="descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter-2 ')]" --level3-toc="descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' book-chapter-3 ')]" --max-levels="1" --no-chapters-in-toc --breadth-first --chapter-mark="pagebreak" --page-breaks-before="/" --margin-left="62" --margin-right="62" --margin-top="56" --margin-bottom="56" --pdf-default-font-size="{{ fontSize}}" --pdf-mono-font-size="{{ fontSize}}" --paper-size="{{ paperSize }}" --pdf-page-numbers --pdf-sans-family="{{ fontFamily }}" --pdf-header-template="
<!DOCTYPE HTML>
<html lang=\"\" style=\"font-family: sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;\">
    <head>
        <meta charset=\"UTF-8\">
        <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">
        <title>_SECTION_</title>
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    </head>
    <body style=\"margin: 0; font-family: sans-serif; color: #000; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;\">

<div class=\"pdf-header\" style=\"margin-top: 20px; padding-bottom: 10px; border-bottom: 1px solid #eee; color: #aaa;\">
    <span>_SECTION_</span>
</div>


    </body>
</html>

" --pdf-footer-template="
<!DOCTYPE HTML>
<html lang=\"\" style=\"font-family: sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;\">
    <head>
        <meta charset=\"UTF-8\">
        <meta content=\"text/html; charset=utf-8\" http-equiv=\"Content-Type\">
        <title>_SECTION_</title>
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    </head>
    <body style=\"margin: 0; font-family: sans-serif; color: #000; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;\">

<div class=\"pdf-footer\" style=\"margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee; color: #aaa;\">
    <span></span>
    <span class=\"footer-pages-count\" style=\"float: right;\">_PAGENUM_</span>
</div>


    </body>
</html>

"
