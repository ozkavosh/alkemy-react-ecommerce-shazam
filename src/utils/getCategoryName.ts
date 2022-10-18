interface CategoryList{
    video: string,
    procesador: string,
    memoria: string,
    almacenamiento: string,
    refrigeracion: string,
}

const categoryList: CategoryList = {
    video: "Placas de video",
    procesador: "Procesadores",
    memoria: "Memorias RAM",
    almacenamiento: "Almacenamiento",
    refrigeracion: "Refrigeración", 
}

const getCategoryName = (category: string): string => {
    return categoryList[category as keyof CategoryList];
}

export default getCategoryName;