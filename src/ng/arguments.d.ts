type Arguments<K> = K extends Ng<infer T> ? T : never;
