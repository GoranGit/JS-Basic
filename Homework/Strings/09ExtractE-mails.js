/**
 * Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.
 */

var text = ' If you want to know why those emails are valid or invalid, check out his post.Stranger valid and invalid email addresses where copied directly from Wikipedia.List of Valid Email Addresses firstname-lastname@example.com email@example.com firstname.lastname@example.com email@subdomain.example.com email@123.123.123.123 _______@example.com email@example.name';
console.log(findAllEmails(text));

function findAllEmails(text)
{
    var res = text.match(/[\w\.\-]+?@[\w\-]+?\.\w+/gi);
    return res;
}