ALTER TABLE work_orders
ADD COLUMN customer_id BIGINT NOT NULL,
ADD COLUMN technician_id BIGINT;

ALTER TABLE work_orders
ADD CONSTRAINT fk_work_orders_customer
    FOREIGN KEY (customer_id)
    REFERENCES users(id);

ALTER TABLE work_orders
ADD CONSTRAINT fk_work_orders_technician
    FOREIGN KEY (technician_id)
    REFERENCES users(id);