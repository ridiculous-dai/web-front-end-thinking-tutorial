/**
 * Created by MP on 2016/4/2.
 */
function sortStr(s){
    var result = "";
    for(var i = s.length; i >= 0; i--)
        result += s.charAt(i);
    return result;
}
sortStr('cba');
