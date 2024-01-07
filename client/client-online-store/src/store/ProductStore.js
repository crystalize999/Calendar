import {makeAutoObservable} from 'mobx'

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Phones'},
            {id: 2, name: 'Tablets'},
            {id: 3, name: 'Fridges'},
            {id: 4, name: 'Laptops'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},

        ]
        this._products = [
            {
                id: 1,
                name: "Mini 6",
                price: 24000,
                rating: 5,
                img: "7ff8aed5-4dd9-4649-ae09-f3f016feac68.jpg",
            },
            {
                id: 2,
                name: "Galaxy Tab S6",
                price: 13500,
                rating: 5,
                img: "21cc3296-4fa8-4334-a3bc-14af1be34f8d.jpg"
            },
            {
                id: 3,
                name: "Iphone 14 Pro Max",
                price: 45000,
                rating: 5,
                img: "ae5da4a5-e797-450a-a188-f4feb668ecff.jpg"

            },
            {
                id: 4,
                name: "Galaxy S23 Ultra",
                price: 50000,
                rating: 5,
                img: "f381f9f4-574e-4ccd-8f52-3bdcdba44f1f.jpg"
            },
            {
                id: 5,
                name: "Galaxy S23 Ultra",
                price: 50000,
                rating: 5,
                img: "f381f9f4-574e-4ccd-8f52-3bdcdba44f1f.jpg"
            },
            {
                id: 6,
                name: "Galaxy S23 Ultra",
                price: 50000,
                rating: 5,
                img: "f381f9f4-574e-4ccd-8f52-3bdcdba44f1f.jpg"
            }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setProduct(products) {
        this._products = products
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}