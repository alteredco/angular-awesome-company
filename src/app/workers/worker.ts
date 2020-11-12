interface Name {
    title:string;
    first:string;
    last:string;
}

interface Id {
    name:string;
    value:string;
}

interface Picture{
    large: string;
    medium:string;
    thumbnail:string;
}

interface Results {
 gender: string;
 name?: Name[];
 id?: Id[];
 picture?: Picture[];
 nat:string;
}

export interface Worker {
    results?: Results[];
}

