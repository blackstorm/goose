import {Controller} from "@hotwired/stimulus";
import {Turbo} from "@hotwired/turbo-rails";

export default class extends Controller {

    connect() {
        this.statusSelector = document.getElementById('status-selector');
        this.categorySelector = document.getElementById('category-selector');

        [this.statusSelector, this.categorySelector].forEach(selector => {
            selector.addEventListener('change', this.onSelectChange.bind(this));
        })
    }

    onSelectChange() {
        const status = this.statusSelector.value;
        const categoryId = this.categorySelector.value;

        let path = "/admin/articles?";
        if (status !== "_status")
            path += `status=${status}`;
        if (categoryId!== "_category")
            path += `${path.endsWith("?") ? "" : "&"}category_id=${categoryId}`

        Turbo.visit(path);
    }

}