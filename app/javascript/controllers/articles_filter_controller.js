import {Controller} from "@hotwired/stimulus";
import {Turbo} from "@hotwired/turbo-rails";

export default class extends Controller {

    static targets = [ "status", "category" ]

    query() {
        const status = this.statusTarget.value;
        const categoryId = this.categoryTarget.value;

        let path = "/admin/articles?";
        if (status !== "_status")
            path += `status=${status}`;
        if (categoryId!== "_category")
            path += `${path.endsWith("?") ? "" : "&"}category_id=${categoryId}`

        Turbo.visit(path);
    }

}