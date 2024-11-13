export function timeStamoToDate(stamp) {
    const t = new Date(stamp);
    
    return t.toLocaleDateString();
}