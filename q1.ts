const url = "?foo=hello&bar=world&baz";

type FormatObjProps = {
  foo: string | undefined;
  bar: string | undefined;
  baz: string | undefined | boolean;
};

function formatQStr(url: string): FormatObjProps {
  if (url.length < 4) {
    return { foo: undefined, bar: undefined, baz: true };
  }

  const b = url.split("=");

  if (b[3] === "") {
    return { foo: undefined, bar: undefined, baz: true };
  }

  const c = b[1].split("&");
  const barTmp = b[2].split("&");

  const bar = barTmp[0];
  const foo = c[0];
  const baz = b[3];

  if (barTmp[1] === "baz") {
    const bazTmp = b[3];
    if (bazTmp === undefined) {
      return { foo: foo, bar: bar, baz: true };
    }

    return { foo: foo, bar: bar, baz: bazTmp };
  }

  const output = {
    foo: foo,
    bar: bar,
    baz: baz,
  };

  return output;
}

const a = formatQStr(url);
