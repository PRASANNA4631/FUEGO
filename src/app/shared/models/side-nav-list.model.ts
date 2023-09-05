export class SideNavListModel {
    CategoryId?: string
    CategoryLabel?: string
    CategoryIcon?: string
    CategoryCode?: string;
    CategoryUrl?: string

    constructor(raw?: any) {
        if(!raw){
            return;
        }
        this.CategoryId = raw.CategoryId
        this.CategoryLabel = raw.CategoryLabel
        this.CategoryIcon = raw.CategoryIcon
        this.CategoryCode = raw.CategoryCode
        this.CategoryUrl = raw.CategoryUrl
    }
} 