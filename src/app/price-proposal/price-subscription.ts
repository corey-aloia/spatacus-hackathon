import { PriceSuggestion } from './price-suggestion';

export class PriceSubscriptionResponse {
    subscribed: boolean;
}

export class PriceSubscription extends PriceSuggestion {
    email: String;
}
