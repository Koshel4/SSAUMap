function whereToGo(place1, place2) {
    const [building1, classRoom1 = ""] = place1.split("-");
    const [building2, classRoom2 = ""] = place2.split("-");
    
    if ("buildingData" in mapInfo) {
        if (mapInfo["buildingData"]["num"] == building2) {
            return ["ldr", "a" + classRoom2];
        }
    }
    else {
        return ["bld"+building1, "bld"+building2];
    }
}