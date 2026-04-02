class StorageManager {
    constructor() {
        this.data = {};
    }

    save(key, value) {
        this.data[key] = value;
    }

    retrieve(key) {
        return this.data[key];
    }

    delete(key) {
        delete this.data[key];
    }
}

class DataStore {
    constructor() {
        this.workers = [];
        this.items = [];
        this.materials = [];
        this.entries = [];
        this.payments = [];
    }

    // CRUD for Workers
    addWorker(worker) {
        this.workers.push(worker);
    }

    getWorkers() {
        return this.workers;
    }

    updateWorker(id, updatedWorker) {
        const index = this.workers.findIndex(w => w.id === id);
        if (index !== -1) {
            this.workers[index] = updatedWorker;
        }
    }

    deleteWorker(id) {
        this.workers = this.workers.filter(w => w.id !== id);
    }

    // CRUD for Items
    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    updateItem(id, updatedItem) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }

    deleteItem(id) {
        this.items = this.items.filter(i => i.id !== id);
    }

    // CRUD for Materials
    addMaterial(material) {
        this.materials.push(material);
    }

    getMaterials() {
        return this.materials;
    }

    updateMaterial(id, updatedMaterial) {
        const index = this.materials.findIndex(m => m.id === id);
        if (index !== -1) {
            this.materials[index] = updatedMaterial;
        }
    }

    deleteMaterial(id) {
        this.materials = this.materials.filter(m => m.id !== id);
    }

    // CRUD for Entries
    addEntry(entry) {
        this.entries.push(entry);
    }

    getEntries() {
        return this.entries;
    }

    updateEntry(id, updatedEntry) {
        const index = this.entries.findIndex(e => e.id === id);
        if (index !== -1) {
            this.entries[index] = updatedEntry;
        }
    }

    deleteEntry(id) {
        this.entries = this.entries.filter(e => e.id !== id);
    }

    // CRUD for Payments
    addPayment(payment) {
        this.payments.push(payment);
    }

    getPayments() {
        return this.payments;
    }

    updatePayment(id, updatedPayment) {
        const index = this.payments.findIndex(p => p.id === id);
        if (index !== -1) {
            this.payments[index] = updatedPayment;
        }
    }

    deletePayment(id) {
        this.payments = this.payments.filter(p => p.id !== id);
    }
}

class UIManager {
    static showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

    static hideModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    }

    static showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 3000);
    }
}

class PageManager {
    static setupDashboardPage() {
        // Initialization code for dashboard
    }

    static setupWorkerPage() {
        // Initialization code for workers
    }

    // Add more setup methods as needed
}

document.addEventListener('DOMContentLoaded', () => {
    const storageManager = new StorageManager();
    const dataStore = new DataStore();
    const uiManager = new UIManager();
    const pageManager = new PageManager();

    // Call setup methods for dashboard pages
    pageManager.setupDashboardPage();
});
