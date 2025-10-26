import { faker } from '@faker-js/faker'

export function createMockProject(overrides: Partial<any> = {}) {
  return {
    id: faker.string.uuid(),
    name: faker.location.streetAddress(),
    address: `${faker.location.city()}, ${faker.location.state()}`,
    type: faker.helpers.arrayElement(['staging-vacant', 'staging-occupied', 'design-only']),
    status: faker.helpers.arrayElement(['lead', 'design', 'staged', 'destaged']),
    stage_date: faker.date.future().toISOString(),
    destage_date: faker.date.future().toISOString(),
    created_at: faker.date.past().toISOString(),
    ...overrides,
  }
}

export function createMockInventoryItem(overrides: Partial<any> = {}) {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.helpers.arrayElement(['Sofas', 'Tables', 'Lamps', 'Rugs', 'Mirrors']),
    qr_code: `QR-${faker.number.int({ min: 1000, max: 9999 })}`,
    condition: faker.helpers.arrayElement(['excellent', 'good', 'fair', 'damaged-minor', 'damaged-major']),
    purchase_cost: faker.number.float({ min: 100, max: 2000, fractionDigits: 2 }),
    current_value: faker.number.float({ min: 80, max: 2000, fractionDigits: 2 }),
    current_location: faker.helpers.arrayElement(['warehouse', `project-${faker.string.uuid()}`]),
    created_at: faker.date.past().toISOString(),
    ...overrides,
  }
}

export function createMockDamageReport(overrides: Partial<any> = {}) {
  return {
    id: faker.string.uuid(),
    item_id: faker.string.uuid(),
    reported_by: faker.string.uuid(),
    reported_at: faker.date.recent().toISOString(),
    damage_type: faker.helpers.arrayElement(['scratch', 'dent', 'tear', 'stain', 'break']),
    severity: faker.helpers.arrayElement(['minor', 'major', 'total-loss']),
    description: faker.lorem.sentence(),
    photos: [faker.image.url(), faker.image.url(), faker.image.url()],
    value_loss: faker.number.float({ min: 50, max: 1000, fractionDigits: 2 }),
    ...overrides,
  }
}

export function createMockUser(overrides: Partial<any> = {}) {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: faker.helpers.arrayElement(['admin', 'manager', 'crew']),
    created_at: faker.date.past().toISOString(),
    ...overrides,
  }
}
