/// <reference path="typings/index.d.ts" />

import * as http from "http";
import * as fs from "fs";

class Student {
    fullname: string;
    constructor(public firstname, public lastname) {
        this.fullname = firstname + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function sayHello(person: Person) {
    return "Hello, " + person.firstname;
}
