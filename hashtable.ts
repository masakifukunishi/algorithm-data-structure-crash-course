class MyHashMap<K, V> {
  private data: [K, V][][];
  constructor() {
    this.data = new Array(1000);
  }

  private hash(key: K): number {
    let hash = 0;
    const keyString = JSON.stringify(key);
    for (let i = 0; i < keyString.length; i++) {
      hash += keyString.charCodeAt(i) % this.data.length;
    }
    return hash;
  }

  public put(key: K, value: V): void {
    const address = this.hash(key);
    if (this.data[address] === undefined) {
      this.data[address] = [];
    }

    const currentBucket = this.data[address];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        currentBucket[i][1] = value;
        return;
      }
    }

    currentBucket.push([key, value]);
  }

  public get(key: K): V | undefined {
    const address = this.hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  public remove(key: K): void {
    const address = this.hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          currentBucket.splice(i, 1);
        }
      }
    }
  }
}

const hashMap = new MyHashMap<number, number>();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1)); // 1
